import React from 'react';
import './Preview.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Preview (props){

    return(
        <div className='preview'>
            <p className='note-title'>
                {props.markdown.noteTitlePreview}
                {props.markdown.dateCreated.date}
                {props.markdown.dateCreated.time}
            </p>

             <ReactMarkdown
                children={props.markdown.markdownPreview}
                skipHtml={true}
                remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
                className='preview-text'
             />
        </div>
    )
}