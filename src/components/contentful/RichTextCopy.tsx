import React, { ReactNode, ReactElement } from 'react'
import {
  BLOCKS,
  MARKS,
  Node as RichTextNode,
  Document,
} from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface RenderMark {
  [key: string]: (text: ReactNode) => ReactNode
}

interface RenderNode {
  [key: string]: (node: RichTextNode, children: ReactNode) => ReactNode
}

interface Options {
  renderMark: RenderMark
  renderNode: RenderNode
}

// Define our own custom rendering rules
const options: Options = {
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

// Define the structure of the document prop
interface DocumentProp {
  json: Document
}

export type RichTextCopyProps = {
  document: DocumentProp
}

export function RichTextCopy({
  document,
}: RichTextCopyProps): ReactElement | null {
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
