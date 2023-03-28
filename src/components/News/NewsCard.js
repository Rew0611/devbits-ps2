import React from 'react'
import Image from './default.png'
// import { Url } from 'url';
function NewsCard(props){
        let { title, abstract, imgUrl, newsUrl, author, date } = props;
        return (
            <>
                <div class="flex justify-center h-[60vh] mb-10">
                    <div
                        class="news-card block max-w-sm rounded-lg bg-black shadow-lg overflow-auto">
                        <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                        <img
                            class="rounded-t-lg"
                            src={(imgUrl==="") ? Image: imgUrl}
                            alt="" />
                        </a>
                        <div class="p-6">
                        <div className='h-20 overflow-hidden'>
                            <h5
                                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                {title}...
                            </h5>
                        </div>
                        
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {abstract}
                        </p>
                        {/* <div class="text-sm text-white">Published On : {date}</div> */}
                        <a
                            href={newsUrl}
                            type="button"
                            class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Button
                        </a>
                        </div>
                    </div>
                    </div>

                {/* <div className="card">
                <div style={{backgroundImage: imgUrl, backgroundSize: "Cover"}} className="w-50 h-50 flex flex-shrink-0">

                </div>
                    <img src={imgUrl == null ? Image : imgUrl} className="card-img-top w-50 h-20" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{abstract}</p>
                        <p className="card-text"><small className="text-muted"> {!author?"By Unknown": author} on {date}</small></p>
                        <a href={newsUrl} className="btn btn-outline-success btn-sm" target="_blank" rel='noreferrer'>Read More</a>
                    </div>

                </div> */}
            </>
        )
}
export default NewsCard;