/* imports */
import type { ContactType, LogSettingsType, SelectorType } from '../types/common'

/* logs */
export const logs: LogSettingsType[] = [
  {
    id: '0',
    complete: false,
    version: 'future changes',
    data: {
      todo: [
        {
          title: 'custom cursor with custom animations',
          content: 'add a custom cursor, with hover & click states.',
        },
        {
          title: 'navigation bar',
          content: 'build navigation bar, on / off, settings menu, etc.',
        },
        {
          title: 'update icons with animations',
          content: 'update icons with animated ones during hover / focus states.',
        },
        {
          title: 'update screen savers',
          content: 'add a new screen saver + updated the ones with custom images.',
        },
        {
          title: 'update themes',
          content: 'update colors on secondary themes',
        },
      ],
      progress: [],
      done: [],
    },
  },
  {
    id: '1',
    complete: true,
    version: '0.0.1',
    data: { 
      todo: [],
      progress: [],
      done: [
        {
          title: 'changelog modal',
          content: `
            complete modal for changelog, define tickets, todo, version changes and button to submit feedback.
          `,
        },
        {
          title: 'add screensavers',
          content: `
            setup a system for screensavers and a button to be able to toggle-start it.
            <br />
            at the moment found in <a href="/settings?t=focus">settings screen</a>
          `
        },
        {
          title: 'settings modal',
          content: `
            complete modal for settings, define dropdown + checkboxes + buttons.
            <br />
            <a href="/settings?t=focus">open settings modal</a>
          `,
        },
        { title: 'focus change for modals', content: 'allow click to change focus on modals' },
        {
          title: 'custom paths for icons',
          content: `
            setup a system for icons to have a custom page and/or url attributes.
            <br />
            example: 
            <br />
            <a href="/settings?t=focus">open settings</a> && <a href="/projects?t=focus">open projects</a>
          `
        },
        { title: 'complete desktop-style', content: 'complete desktop style background + grainy background.' },
      ],
    },
  },
  {
    id: '2',
    complete: false,
    version: '0.0.2',
    data: {
      todo: [
        {
          title: 'add guestbook icon',
          content:
            'add an icon for a guestbook, where users can submit something to the website and will be send to me for approval and shown to everyone.'
        },
        {
          title: 'add modal for projects',
          content: `
            add a modal to projects icon. need a list of all projects and links to them, or they open a page for it?
            <a href="/projects?t=focus">link to projects</a>
          `
        },
        {
          title: 'button to feedback in changelog',
          content: 'add a button linking to feedback modal in changelog modal.'
        },
      ],
      progress: [
        {
          title: 'add modal for feedback / contacts',
          content: 'add a modal to contact/feedback. handle form submission and send data to a backend/email.'
        },
      ],
      done: [
        {
          title: 'streamline link navigation',
          content: `
            at the moment, the link navigation works great for <a href="/settings?t=focus">the settings screen</a>,
            but needs to work correctly also for page navigation, such as the <a href="/projects?t=focus">projects screen</a>
          `
        },
        {
          title: 'external links icons on desktop',
          content: 'add external links icons for desktop, arrow animation to indicate on hover.',
        },
      ],
    }
  }
]
export const dropdownLogs: SelectorType[] = [
  { value: '0', text: 'future changes' },
  { value: '1', text: 'v0.0.1' },
  { value: '2', text: 'v0.0.2' },
]
export const currentVersion: SelectorType & { id: number } = { value: '2', text: 'v0.0.2', id: 2 }
/* contacts */
export const dropdownContacts: SelectorType[] = [
  { value: '0', text: 'contact me' },
  { value: '1', text: 'suggest changes' },
]
export const currentContact: SelectorType & { id: number } = { value: '0', text: 'contact me', id: 0 }
export const contacts: ContactType[] = [
  {
    id: '0',
    url: '/api/contact',
    inputs: [
      {
        id: 'username',
        label: 'nick/alias',
        labelAddition: '[ you can avoid using your real name ]',
        isRequired: true,
        type: 'input',
        inputType: 'username',
      },
      {
        id: 'info',
        label: 'your message*',
        isRequired: true,
        type: 'area',
      },
    ],
  },
  {
    id: '1',
    url: '/api/suggest-changes',
    inputs: [
      {
        id: 'username',
        label: 'email*',
        isRequired: true,
        type: 'input',
        inputType: 'text',
      },
      {
        id: 'info',
        label: 'describe what you would like to change*',
        isRequired: true,
        type: 'area',
      },
    ],
  },
]
