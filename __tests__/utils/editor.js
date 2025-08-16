import { Editor, Node, Mark } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import Image from '@tiptap/extension-image';
import { Markdown } from "../../src/Markdown";

export function createEditor({
    image,
    codeBlock,
    htmlNode,
    htmlMark,
    markdownOptions,
} = {}) {
    return new Editor({
        extensions: [
            Markdown.configure({
                ...markdownOptions,
            }),
            StarterKit.configure({
                codeBlock: !!codeBlock,
            }),
            Table,
            TableRow,
            TableHeader,
            TableCell,
            Image.configure({
                ...image,
            }),
            Node.create({
                name: 'html-node',
                ...htmlNode,
            }),
            Mark.create({
                name: 'html-mark',
                ...htmlMark,
            }),
        ],
    });
}
