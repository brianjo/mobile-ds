
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','569'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','07a'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','6e6'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','e13'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','738'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','2fe'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','263'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','8b3'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','015'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','750'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','8fd'),
  exact: true,
},
{
  path: '/docs/android',
  component: ComponentCreator('/docs/android','903'),
  exact: true,
},
{
  path: '/docs/building/androidbuild',
  component: ComponentCreator('/docs/building/androidbuild','3f2'),
  exact: true,
},
{
  path: '/docs/building/iosbuild',
  component: ComponentCreator('/docs/building/iosbuild','cde'),
  exact: true,
},
{
  path: '/docs/helloworld',
  component: ComponentCreator('/docs/helloworld','594'),
  exact: true,
},
{
  path: '/docs/ios',
  component: ComponentCreator('/docs/ios','1ac'),
  exact: true,
},
{
  path: '/docs/modelprep/interpreters',
  component: ComponentCreator('/docs/modelprep/interpreters','70a'),
  exact: true,
},
{
  path: '/docs/modelprep/optimization',
  component: ComponentCreator('/docs/modelprep/optimization','aac'),
  exact: true,
},
{
  path: '/docs/modelprep/quantization',
  component: ComponentCreator('/docs/modelprep/quantization','f8c'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
