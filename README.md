# react-data-table
2	
3	[![npm](https://img.shields.io/npm/v/vite-plugin-markdown.svg?style=for-the-badge)](https://www.npmjs.com/package/vite-plugin-markdown) [![npm](https://img.shields.io/npm/v/vite-plugin-markdown/vite-1?style=for-the-badge)](https://www.npmjs.com/package/vite-plugin-markdown/v/vite-1)
4	
5	A plugin enables you to import a Markdown file as various formats on your [vite](https://github.com/vitejs/vite) project.
6	
7	## Setup
8	
9	```
10	npx i -D vite-plugin-markdown
11	```
12	
13	<details>
14	<summary>For vite v1</summary>
15	
16	```
17	npx i -D vite-plugin-markdown@vite-1
18	```
19	</details>
20	
21	### Config
22	
23	```js
24	const mdPlugin = require('vite-plugin-markdown')
25	
26	module.exports = {
27	  plugins: [mdPlugin(options)]
28	}
29	```
30	
31	### Options
32	
33	```ts
34	mode?: ('html' | 'toc' | 'react' | 'vue')[]
35	markdown?: (body: string) => string
36	markdownIt?: MarkdownIt | MarkdownIt.Options
37	```
38	
39	Enum for `mode` is provided as `Mode`
40	
41	```ts
42	import { Mode } from 'vite-plugin-markdown'
43	
44	console.log(Mode.HTML) //=> 'html'
45	console.log(Mode.TOC) //=> 'toc'
46	console.log(Mode.REACT) //=> 'react'
47	console.log(Mode.VUE) //=> 'vue'
48	```
49	
50	## Mode examples:
51	
52	### Import Front Matter attributes
53	
54	```md
55	---
56	title: Awesome Title
57	description: Describe this awesome content
58	tags:
59	  - "great"
60	  - "awesome"
61	  - "rad"
62	---
63	
64	# This is awesome
65	
66	Vite is an opinionated web dev build tool that serves your code via native ES Module imports during dev and bundles it with Rollup for production.
67	```
68	
69	```ts
70	import { attributes } from './contents/the-doc.md';
71	
72	console.log(attributes) //=> { title: 'Awesome Title', description: 'Describe this awesome content', tags: ['great', 'awesome', 'rad'] }
73	```
74	
75	### Import compiled HTML (`Mode.HTML`)
76	
77	```md
78	# This is awesome
79	
80	Vite is an opinionated web dev build tool that serves your code via native ES Module imports during dev and bundles it with Rollup for production.
81	```
82	
83	```ts
84	import { html } from './contents/the-doc.md';
85	
86	console.log(html) //=> "<h1>This is awesome</h1><p>ite is an opinionated web dev build tool that serves your code via native ES Module imports during dev and bundles it with Rollup for production.</p>"
87	```
88	
89	### Import ToC metadata (`Mode.TOC`)
90	
91	```md
92	# vite
93	
94	Vite is an opinionated web dev build tool that serves your code via native ES Module imports during dev and bundles it with Rollup for production.
95	
96	## Status
97	
98	## Getting Started
99	
100	# Notes
101	```
102	
103	```ts
104	import { toc } from './contents/the-doc.md'
105	
106	console.log(toc) //=> [{ level: '1', content: 'vite' }, { level: '2', content: 'Status' }, { level: '2', content: 'Getting Started' }, { level: '1', content: 'Notes' },]
107	```
108	
109	### Import as a React component (`Mode.REACT`)
110	
111	```jsx
112	import React from 'react'
113	import { ReactComponent } from './contents/the-doc.md'
114	
115	function MyReactApp() {
116	  return (
117	    <div>
118	      <ReactComponent />
119	    </div>
120	}
121	```
122	
123	<details>
124	<summary>Custom Element on a markdown file can be runnable as a React component as well</summary>
125	
126	```md
127	# This is awesome
128	
129	Vite is <MyComponent type={'react'}>
130	```
131	
132	```jsx
133	import React from 'react'
134	import { ReactComponent } from './contents/the-doc.md'
135	import { MyComponent } from './my-component'
136	
137	function MyReactApp() {
138	  return (
139	    <div>
140	      <ReactComponent my-component={MyComponent} />
141	    </div>
142	}
143	```
144	
145	`MyComponent` on markdown perform as a React component.
146	
147	</details>
148	
149	### Import as a Vue component (`Mode.VUE`)
150	
151	```vue
152	<template>
153	  <article>
154	    <markdown-content />
155	  </article>
156	</template>
157	
158	<script>
159	import { VueComponent } from './contents/the-doc.md'
160	
161	export default {
162	  components: {
163	    MarkdownContent: VueComponent
164	  }
165	};
166	</script>
167	```
168	
169	<details>
170	<summary>Custom Element on a markdown file can be runnable as a Vue component as well</summary>
171	
172	```md
173	# This is awesome
174	
175	Vite is <MyComponent :type="'vue'">
176	```
177	
178	```vue
179	<template>
180	  <article>
181	    <markdown-content />
182	  </article>
183	</template>
184	
185	<script>
186	import { VueComponentWith } from './contents/the-doc.md'
187	import MyComponent from './my-component.vue'
188	
189	export default {
190	  components: {
191	    MarkdownContent: VueComponentWith({ MyComponent })
192	  }
193	};
194	</script>
195	```
196	
197	`MyComponent` on markdown perform as a Vue component.
198	
199	</details>
200	
201	## License
202	
203	MIT
