# Prism Design System

> Documentation site for Pendo's design system, Prism. Live on [GitHub Pages](https://pendo-io.github.io/prism-design-system).

![deployment workflow status](https://github.com/pendo-io/prism-design-system/actions/workflows/publish.yml/badge.svg)

## Project setup

> [!TIP]
> **Just making a small change?** Try editing [directly in Github](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)! You won't need to clone the repository or set up a local development environment.
>
> See the linked Github documentation for how to edit! Be sure to **create a new branch** and pull request so that your changes can be reviewed.

*For engineers*:

To run the site locally, you must have NodeJS and NPM installed.

Additionally, you must have authenticated yourself in Artifactory, and associated the `@pendo` package scope to our private registry. Instructions for how to do so are on [Confluence](https://pendo-io.atlassian.net/wiki/spaces/ENG/pages/1437761584/JFrog+Artifactory+-+Private+NPM+Registry+Setup).

Once that setup is complete, installation on the command line is simple:

```
npm install
```

### Compiles and hot-reloads for development

As you make changes to the source files, the site will automatically recompile and re-render on any browser where it is being previewed.

By default, the site is served locally at `http://localhost:8080/prism-design-system`.

```
npm start
# OR
npm run serve
```

### Compiles and minifies for production

You shouldn't need to run the build script unless you're messing with the deployment process.

```
npm run build
```

## Structure & Contribution Guidelines

The main content for the site is largely pulled from **extended Markdown files (MDX)** within the **`src/content` directory**. Most contributions can happen exclusively within that folder.

### URL Generation

Any file within the `src/content` directory with a `.mdx` extension will be used to generate a page (or tab) on the built site.

For example, a file called `icons.mdx` in the directory `src/content/foundations/reference/` will be rendered at a URL like `http://localhost:8080/prism-design-system/foundations/reference/icons`.

There are a couple of exceptions:

- If the file is named `index.mdx` specifically, it will be dropped from the URL: `src/content/components/buttons/index.mdx` is rendered at a URL like `http://localhost:8080/prism-design-system/components/buttons`.
- A file with a `META.tab` field set will only be rendered in a _tab_ (not a standalone page). See the ["Tabs" section of the README](#tabs) for details.

### Sidebar Navigation

> [!IMPORTANT]
> **The sidebar is *not* currently auto-generated**. After creating new files, the URLs will be valid, but the links need to be manually added to `src/components/SidebarNav.vue`, in the `NAV_ITEMS` array. Simply copy-pasting existing links and sections in that variable should be sufficient.

### MDX Content

**Any valid Markdown is valid MDX!** You can simply write as you normally would in a README.md file, and the site will be rendered appropriately.

Additionally, MDX allows you to **import** Component Library components and display them inline with your Markdown documentation. The syntax (called JSX) is very similar to standard HTML and JS.

For example, to render a Pendo Button in a MDX file:

```mdx
import { PendoButton } from '@pendo/components';

## Overview

A button is an essential UI component in most designs. Here is an example:

<PendoButton label="Button" type="primary" />

Pretty interesting!
```

#### Reactivity & Advanced Syntax

Sometimes an example requires the use of reactive *props* or *events* from the Component Library's exposed interface. External *variables* may be necessary to wire a flow together.

The syntax to accomplish this in JSX is a bit different from Vue:

- "Reactive" attributes must be surrounded by `{curly braces}` to distinguish them from regular string attributes
- Variables declared elsewhere in the MDX document must be `export`ed for them to be usable by a component in the document

A small example of a button whose label is incremented on each click follows:

```mdx
import { ref } from 'vue';
import { PendoButton } from '@pendo/components';

# Reactive button example

export const count = ref(0);

<PendoButton label={`Count: ${count.value}`} onClick={() => count.value++} />
```

> [!CAUTION]
> **Documentation with heavy logic should be the exception, rather than the rule**. Use the above syntax only when absolutely necessary, and look for ways to simplify examples to be purely visual. The purpose of this documentation is **not** to demonstrate full-fledged application snippets: look to Storybook for those examples.

### Tabs

To render multiple Markdown files in separate tabs of a single documentation page, a specific structure is necessary:

```
src/content/components/buttons
    index.mdx
    spec.mdx
    properties.mdx
    (...et cetera)
```

The `index.mdx` file should import and use the `ContentTabs` prebuilt component, like so:

```mdx
import ContentTabs from '@/components/ContentTabs.vue';

# Buttons

Summary of the Button component here

<ContentTabs />
```

For every other file to be rendered in a tab, add the following **export** to the top of the file:

```mdx
export const META = {
    tab: true,
    index: 1,
    label: 'Specs'
};

## Overview

Blah blah documentation content
```

- `META.tab` should be set to a truthy value
- `META.label` is the human-readable label for the tab
- `META.index` is used for sorting the tabs' rendered order

## Pull Requests & Deployment

Make a pull request to the `main` branch of the repository and follow Pendo's standard review process.

A lookaside will be built and deployed at a Google Cloud URL with the following form:

```
https://storage.googleapis.com/prism-design-system/{{ BRANCH_NAME }}/index.html#/
```

You will also be given a link to the deployment at the bottom of the PR discussion:

![screenshot of GitHub deployment message on a pull request](./docs/deployment.png)

> [!WARNING]
> Merges to the `main` branch **automatically trigger the site's deployment** to Github Pages. Therefore, a handful of conditions are enforced on branches before they can merge into `main`:
>
> - The branch needs an open pull request
> - The `build` job needs to pass on that branch
>
> Once both of those conditions are met, merging can take place in either the Github UI, or on the command line.

 Within a minute or two after merging into the `main` branch, the latest changes should be visible at `https://pendo-io.github.io/prism-design-system`.

## To Do

The best way to contribute is to **migrate documentation from Figma into the site!** If you see any pages that need updating (or creation), don't hesitate to give it a shot.

Additionally, the following items were stretch goals for Carrie and Neill during the 25.1 hackathon that were not completed:

- [ ] Flesh out the homepage with search bar and links to top-level pages. Figma designs for the homepage are [here](https://www.figma.com/design/VvIdJrQwAiip94MOReeghV/%F0%9F%8C%88-2024-Prism-Site?node-id=1105-7744&t=4Ieo0YmZOyIwBtwZ-4).

  This unit of work won't make sense to complete until there is content in the top-level pages (such as "About Prism", "Product design principles", etc).

- [x] Implement the search bar functionality on the sidebar
- [ ] Automatic generation of links in the sidebar based on URL routes
- [ ] Auto-expand the sidebar sections to the currently-active route
- [ ] Add a right-hand sidebar with the table of contents for the current page. Clicking on the entries links to the relevant Markdown heading. Figma designs for this sidebar are [here](https://www.figma.com/design/VvIdJrQwAiip94MOReeghV/%F0%9F%8C%88-2024-Prism-Site?node-id=1106-7755&t=hdnic9Lg9Eg7iv8S-0).
- [x] More deployment automation:
  - [x] Lookasides deployed for pull requests
  - [x] Lookaside links posted in a Github PR comment
  - [x] Automatic deployment of the `main` branch
- [ ] Content Management System: some editor like [Prose](https://prose.io/) allowing for WYSIWYG editing of site content, with live previews
