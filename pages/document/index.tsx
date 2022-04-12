import React, { useState } from "react";
import { NextPage } from "next";
import { Editor, EditorState } from "draft-js";

const Document: NextPage = () => {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);
	return (
		<div>
			<Editor editorState={editorState} onChange={setEditorState} />
		</div>
	);
};

export default Document;
