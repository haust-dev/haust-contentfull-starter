import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Define our own custom rendering rules
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="tracking-wider leading-normal text-xl">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-4xl tracking-wider leading-normal">{children}</h1>
    ),
    [BLOCKS.HR]: () => <br />,
  },
}

// RichTextCopy component definition
export type RichTextCopyProps = {
  document: any
}

export function RichTextCopy({ document }: RichTextCopyProps) {
  if (!document) {
    console.error('The document prop is undefined.')
    return null
  }

  if (!document.json) {
    console.error('The document.json field is missing.')
    return null
  }
  return <div>{documentToReactComponents(document.json, options)}</div>
}
