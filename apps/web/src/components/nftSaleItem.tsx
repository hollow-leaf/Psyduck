import { nftCreate } from "../models/model"
import { formatAddress } from "../utils/stingify";
import React from "react"

export function NftSaleItem(props:nftCreate){

    return (
        <div>
            <div className="card" style={{"background": "rgba(40, 2, 84, 0.7)"}} onClick={() => {
                
            }}>
                <h4>ID: {props.nftId}</h4>
                <h4>Price: {props.price}</h4>
                <h4>Creator: {formatAddress(props.creator)}</h4>
                <div className="shine"></div>
                <div className="background" style={{"backgroundImage": `url(${props.url})`}}>
                    <div className="tiles">
                        <div className="tile tile-1"></div>
                        <div className="tile tile-2"></div>
                        <div className="tile tile-3"></div>
                        <div className="tile tile-4"></div>

                        <div className="tile tile-5"></div>
                        <div className="tile tile-6"></div>
                        <div className="tile tile-7"></div>
                        <div className="tile tile-8"></div>

                        <div className="tile tile-9"></div>
                        <div className="tile tile-10"></div>
                    </div>

                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </div>
            <div>
                <dialog id={`my_modal_${props.nftId}`} className="modal">
                    <form method="dialog" className="modal-box bg-white py-10">
                    <h3 className="font-bold text-lg" style={{textAlign:"center"}}>DETAIL</h3>
                    <div className="px-16 mt-8 flex flex-col space-y-3">
                        <div className="flex">
                        <p>Provider</p>
                        <p className="ml-auto">{}</p>
                        </div>
                        <div className="flex ">
                        <p>Power Type</p>
                        <p className="ml-auto">
                            
                        </p>
                        </div>
                        <div className="flex ">
                        <p>CO2 CID</p>
                        <p className="ml-auto">{}</p>
                        </div>
                        <div className="flex ">
                        <p>NFT Address</p>
                        <p className="ml-auto">{}</p>
                        </div>
                    </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    )
}