Quantization
============

This recipe demonstrates how to quantize a PyTorch model so it can run
with reduced size and faster inference speed with about the same
accuracy as the original model. Quantization can be applied to both
server and mobile model deployment, but it can be especially important
or even critical on mobile, because a non-quantized model's size may
exceed the limit that an iOS or Android app allows for, cause the
deployment or OTA update to take too much time, and make the inference
too slow for a good user experience.

Introduction
------------

Quantization is a technique that converts 32-bit floating numbers in the
model parameters to 8-bit integers. With quantization, the model size
and memory footprint can be reduced to 1/4 of its original size, and the
inference can be made about 2-4 times faster, while the accuracy stays
about the same.

There are overall three approaches or workflows to quantize a model:
post training dynamic quantization, post training static quantization,
and quantization aware training. But if the model you want to use
already has a quantized version, you can use it directly without going
through any of the three workflows above. For example, the <span
class="title-ref">torchvision</span> library already includes quantized
versions for models MobileNet v2, ResNet 18, ResNet 50, Inception v3,
GoogleNet, among others. So we will make the last approach another
workflow, albeit a simple one.

Note

The quantization support is available for a limited set of operators.
See
[this](https://pytorch.org/blog/introduction-to-quantization-on-pytorch/#device-and-operator-support)
for more information.

Pre-requisites
--------------

PyTorch 1.6.0 or 1.7.0

torchvision 0.6.0 or 0.7.0

Workflows
---------

Use one of the four workflows below to quantize a model.

### 1. Use Pretrained Quantized MobileNet v2

To get the MobileNet v2 quantized model, simply do:

    import torchvision
    model_quantized = torchvision.models.quantization.mobilenet_v2(pretrained=True, quantize=True)

To compare the size difference of a non-quantized MobileNet v2 model
with its quantized version:

    model = torchvision.models.mobilenet_v2(pretrained=True)

    import os
    import torch

    def print_model_size(mdl):
        torch.save(mdl.state_dict(), "tmp.pt")
        print("%.2f MB" %(os.path.getsize("tmp.pt")/1e6))
        os.remove('tmp.pt')

    print_model_size(model)
    print_model_size(model_quantized)

The outputs will be:

    14.27 MB
    3.63 MB

### 2. Post Training Dynamic Quantization

To apply Dynamic Quantization, which converts all the weights in a model
from 32-bit floating numbers to 8-bit integers but doesn't convert the
activations to int8 till just before performing the computation on the
activations, simply call \`torch.quantization.quantize\_dynamic\`:

    model_dynamic_quantized = torch.quantization.quantize_dynamic(
        model, qconfig_spec={torch.nn.Linear}, dtype=torch.qint8
    )

where <span class="title-ref">qconfig\_spec</span> specifies the list of
submodule names in <span class="title-ref">model</span> to apply
quantization to.

Warning

An important limitation of Dynamic Quantization, while it is the easiest
workflow if you do not have a pre-trained quantized model ready for use,
is that it currently only supports <span
class="title-ref">nn.Linear</span> and <span
class="title-ref">nn.LSTM</span> in <span
class="title-ref">qconfig\_spec</span>, meaning that you will have to
use Static Quantization or Quantization Aware Training, to be discussed
later, to quantize other modules such as <span
class="title-ref">nn.Conv2d</span>.

The full documentation of the <span
class="title-ref">quantize\_dynamic</span> API call is
[here](https://pytorch.org/docs/stable/quantization.html#torch.quantization.quantize_dynamic).
Three other examples of using the post training dynamic quantization are
[the Bert
example](https://pytorch.org/tutorials/intermediate/dynamic_quantization_bert_tutorial.html),
[an LSTM model
example](https://pytorch.org/tutorials/advanced/dynamic_quantization_tutorial.html#test-dynamic-quantization),
and another [demo LSTM
example](https://pytorch.org/tutorials/recipes/recipes/dynamic_quantization.html#do-the-quantization).

### 3. Post Training Static Quantization

This method converts both the weights and the activations to 8-bit
integers beforehand so there won't be on-the-fly conversion on the
activations during the inference, as the dynamic quantization does,
hence improving the performance significantly.

To apply static quantization on a model, run the following code:

    backend = "qnnpack"
    model.qconfig = torch.quantization.get_default_qconfig(backend)
    torch.backends.quantized.engine = backend
    model_static_quantized = torch.quantization.prepare(model, inplace=False)
    model_static_quantized = torch.quantization.convert(model_static_quantized, inplace=False)

After this, running <span
class="title-ref">print\_model\_size(model\_static\_quantized)</span>
shows the static quantized model is <span
class="title-ref">3.98MB</span>.

A complete model definition and static quantization example is
[here](https://pytorch.org/docs/stable/quantization.html#quantization-api-summary).
A dedicated static quantization tutorial is
[here](https://pytorch.org/tutorials/advanced/static_quantization_tutorial.html).

Note

To make the model run on mobile devices which normally have arm
architecture, you need to use <span class="title-ref">qnnpack</span> for
<span class="title-ref">backend</span>; to run the model on computer
with x86 architecture, use <span class="title-ref">fbgemm</span>.

### 4. Quantization Aware Training

Quantization aware training inserts fake quantization to all the weights
and activations during the model training process and results in higher
inference accuracy than the post-training quantization methods. It is
typically used in CNN models.

To enable a model for quantization aware traing, define in the <span
class="title-ref">\_\_init\_\_</span> method of the model definition a
<span class="title-ref">QuantStub</span> and a <span
class="title-ref">DeQuantStub</span> to convert tensors from floating
point to quantized type and vice versa:

    self.quant = torch.quantization.QuantStub()
    self.dequant = torch.quantization.DeQuantStub()

Then in the beginning and the end of the <span
class="title-ref">forward</span> method of the model definition, call
<span class="title-ref">x = self.quant(x)</span> and <span
class="title-ref">x = self.dequant(x)</span>.

To do a quantization aware training, use the following code snippet:

    model.qconfig = torch.quantization.get_default_qat_qconfig(backend)
    model_qat = torch.quantization.prepare_qat(model, inplace=False)
    # quantization aware training goes here
    model_qat = torch.quantization.convert(model_qat.eval(), inplace=False)

For more detailed examples of the quantization aware training, see
[here](https://pytorch.org/docs/master/quantization.html#quantization-aware-training)
and
[here](https://pytorch.org/tutorials/advanced/static_quantization_tutorial.html#quantization-aware-training).

A pre-trained quantized model can also be used for quantized aware
transfer learning, using the same <span class="title-ref">quant</span>
and <span class="title-ref">dequant</span> calls shown above. See
[here](https://pytorch.org/tutorials/intermediate/quantized_transfer_learning_tutorial.html#part-1-training-a-custom-classifier-based-on-a-quantized-feature-extractor)
for a complete example.

After a quantized model is generated using one of the steps above,
before the model can be used to run on mobile devices, it needs to be
further converted to the <span class="title-ref">TorchScript</span>
format and then optimized for mobile apps. See the [Script and Optimize
for Mobile recipe](script_optimized.html) for details.

Learn More
----------

For more info on the different workflows of quantization, see
[here](https://pytorch.org/docs/stable/quantization.html#quantization-workflows)
and
[here](https://pytorch.org/blog/introduction-to-quantization-on-pytorch/#post-training-static-quantization).
