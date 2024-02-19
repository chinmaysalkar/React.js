import React, { useEffect, useState } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const editorConfiguration = {
    toolbar: [
        'heading',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        'blockQuote',
        'cut',
        'copy',
        'paste',
        'undo',
        'redo',
        'CKFinder',
        'Image',
        'MediaEmbed',
        'insertTable',
        'fontColor',
        'fontBackgroundColor',
        'highlight',
        'alignment',
        'outdent',
        'indent',
        'subscript',
        'superscript',
        'underline',
        'strikethrough',
        'removeFormat',
        'horizontalLine',
        'specialCharacters',
        'selectAll',
        'pasteFromWord',
        'sourceEditing', 
    ],
};

const EditorComponent = () => {
    const [editorHeight, setEditorHeight] = useState('500px');

    useEffect(() => {
        
        console.log('Editor is ready to use!');
    }, []);

    const handleChange = (event, editor) => {
        const newHeight = `${editor.ui.view.editable.scrollHeight}px`;
        setEditorHeight(newHeight);
        console.log(event);
    };
    

    const handleBlur = (event, editor) => {
        console.log('Blur.', editor);
    };

    const handleFocus = (event, editor) => {
        console.log('Focus.', editor);
    };

    return (
        <div className="App">
            <CKEditor
                editor={Editor}
                config={editorConfiguration}
                data="<p>content</p>"
                onReady={(editor) => {
                    
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                style={{ height: editorHeight }}
            />
        </div>
    );
};

export default EditorComponent;
