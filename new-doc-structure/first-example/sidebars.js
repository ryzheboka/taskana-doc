/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  userSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/congratulations', 'getting-started/create-a-blog-post', 'getting-started/create-a-document', 'getting-started/create-a-page', 'getting-started/deploy-your-site', 'getting-started/markdown-features'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: ['getting-started/congratulations', 'getting-started/create-a-blog-post', 'getting-started/create-a-document', 'getting-started/create-a-page', 'getting-started/deploy-your-site', 'getting-started/markdown-features'],
    },
    {
      type: 'category',
      label: 'Features',
      items: ['getting-started/congratulations', 'getting-started/create-a-blog-post', 'getting-started/create-a-document', 'getting-started/create-a-page', 'getting-started/deploy-your-site', 'getting-started/markdown-features'],
    },
    {
      type: 'category',
      label: 'Adapter',
      items: ['getting-started/congratulations', 'getting-started/create-a-blog-post', 'getting-started/create-a-document', 'getting-started/create-a-page', 'getting-started/deploy-your-site', 'getting-started/markdown-features'],
    },
  ],
  contributorSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['blog/getting-started/congratulations', 'blog/getting-started/create-a-blog-post', 'blog/getting-started/create-a-document', 'blog/getting-started/create-a-page', 'blog/getting-started/deploy-your-site', 'blog/getting-started/markdown-features'],
    }
  ]

};

module.exports = sidebars;
