import React, {useState} from 'react';
import {LogPhrases} from '../Phrases';
import {getLanguage} from '../../Core.js';

function importDataBase(r) {
    return r.keys().map(r);
}

let images = importDataBase(require.context('/public/database', false, /\.(png|jpe?g|svg)$/));
console.log("images",images)

function LogContainer() {
    return (
        <div className='logSection'>
            <div>
                <table width='100%' border='1'>
                    <thead>
                        <tr>
                            <th className="logSection--column1">{LogPhrases.phrase_image[getLanguage()]}</th>
                            <th className="logSection--column2">{LogPhrases.phrase_date[getLanguage()]}</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        {images.map((image, index) => <tr><th><a href={image} target="_blank"><img draggable="false" src={image} width="200px" alt="Loading..."></img></a></th><th>{(require.context('/public/database', false, /\.(png|jpe?g|svg)$/)).keys()[index].replace(/.\/IMG-(\w+)-(\w+)-(\w+) (\w+):(\w+):(\w+).\w+.\w+/, "$1-$2-$3 $4:$5:$6")}</th></tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default function LogTable() {
    return (
        <div>
            <LogContainer />
        </div>
    )
}