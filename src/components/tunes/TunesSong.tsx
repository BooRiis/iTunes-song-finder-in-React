import React from 'react'

import './TunesSong.scss'
import {Song} from '../../types'
import {truncate} from 'lodash-es'


interface Props {
    song: Song
}

const TunesSong: React.FC<Props> = props => {
    const {song} = props

    const songify = (song: Song): string => {
        const newTitle = song.artist + ' - ' + song.title
        return shorten(newTitle, 100)
    }

    const shorten = (str: string, len = 55): string => {
        return truncate(str, {length: len})
    }
    return (
        <article className="song">

            <div className="inside">
                <h2>{songify(song)}</h2>
                <div className="player">
                    {song.artwork && (<img src={song.artwork} alt="album art" />)}
                    <audio controls src={song.audioFile}></audio>
                </div>
            </div>
            <footer className="meta">{shorten(song.album)}</footer>
        </article>
    )
}

export default TunesSong
