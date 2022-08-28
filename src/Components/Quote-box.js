import React from 'react';
import '../Stylesheets/Quote-box.css'
import { SiTwitter } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';
import { ImQuotesLeft } from 'react-icons/im';

function QuoteBox ({color, changeColor, text, author}) {
    return (
        <div className='quote-box' id='quote-box'>
            <div
                className={`text transition`}
                style={{color:color}}
                id='text' >
                <p>
                    <span className='quotes'>
                        <ImQuotesLeft />
                    </span>
                    {` ${text}`}
                </p>
            </div>

            <div
                className='author transition'
                style={{color:color}}
                id='author'
            >
                <p>-{author}</p>
            </div>

            <div className='buttons transition'>
                <div className='icons'>
                    <a
                        id='tweet-quote'
                        className='twitter transition'
                        style = {{backgroundColor:color}}
                        href='https://twitter.com/intent/tweet'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiTwitter />
                    </a>
                    <a
                        className='facebook transition'
                        style={{backgroundColor:color}}
                        href= 'https://www.facebook.com'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiFacebook />
                    </a>
                </div>
                <button
                    id='new-quote'
                    className='newquote transition'
                    style = {{backgroundColor:color}}
                    onClick = {changeColor}
                >
                    New Quote
                </button>
            </div>
        </div>
    )
}

export default QuoteBox