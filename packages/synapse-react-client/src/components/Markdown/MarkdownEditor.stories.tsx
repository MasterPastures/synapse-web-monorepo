import { Meta, StoryObj } from '@storybook/react'
import { MarkdownEditor } from './MarkdownEditor'
import { useState } from 'react'
import { mockManagedACTAccessRequirementWikiPage } from '../../mocks/mockWiki'

const meta: Meta<typeof MarkdownEditor> = {
  title: 'Markdown/MarkdownEditor',
  component: MarkdownEditor,
  render: function RenderFn(args) {
    const [text, setText] = useState<string>(args.text)

    return (
      <>
        <MarkdownEditor {...args} text={text} setText={setText} />
      </>
    )
  },
} satisfies Meta<typeof MarkdownEditor>

export default meta
type Story = StoryObj<typeof meta>

export const MarkdownEditorDemo: Story = {
  args: {
    text: mockManagedACTAccessRequirementWikiPage.markdown,
  },
}
