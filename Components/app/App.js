import React from 'react';
import Split from 'react-split';
import {functions} from '../../functions'
import './App.css';
import Sidebar from '../sidebar/Sidebar';
import Editor from '../editor/Editor';

export default function App(){
    const [markdown, setMarkdown] = React.useState(
        {
            markdown: 'Type new note...',
            markdownPreview: 'Type new note...',
            noteTitle: 'Note...',
            noteTitlePreview: 'Note....',
            dateCreated: {
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            }
        }
    );
    
    function handleNoteChange (event){
        const contentEditableText = event.target.value;
        setMarkdown({
            ...markdown,
            markdown: contentEditableText,
            markdownPreview: functions.filterText(contentEditableText)
        });
        console.log(markdown)
    }

    function handleTitleChange(event){
        const contentEditableText = event.target.value;
            setMarkdown({
                ...markdown,
                noteTitle: contentEditableText,
                noteTitlePreview: functions.filterText(contentEditableText)
            });

            console.log(markdown)
    }

    function addNewNote(){
        console.log(markdown)
    }

    return (
        <div className='app'>
            <Split
                sizes={[25, 75]}
                gutterSize={8}
                minSize={300}
                className='flex'>

                    <Sidebar/>
                    <Editor
                        markdown={markdown}
                        addNewNote={addNewNote}
                        handleTitleChange={handleTitleChange}
                        handleNoteChange={handleNoteChange}
                    />
            </Split>
        </div>
    )
}