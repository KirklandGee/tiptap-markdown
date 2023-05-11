import { Mark } from "@tiptap/core";
import { defaultMarkdownSerializer } from "prosemirror-markdown";


const Bold = Mark.create({
    name: 'bold',
});

export default Bold.extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.marks.strong,
                parse: {
                    // handled by markdown-it
                }
            },
        }
    }
});
