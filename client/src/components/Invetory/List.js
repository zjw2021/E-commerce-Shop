import React from 'react'
import styles from './invetory.module.scss'

const List = () => {
    const products = [
        {
            business: "CVS",
            logo: "https://cvshealth.com/sites/default/files/styles/large/public/cvs-pharmacy-logo-stacked.png?itok=BljFgQ2h",
            link: "https://cvs.com",
            tags: ["convenience, ", "drugstore"]
        },
        {
            business: "Target",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/1541px-Target_logo.svg.png",
            link: "https://www.target.com",
            tags: ["retail, ", "grocery"]
        },
        {
            business: "Walmart",
            logo: "https://www.freepnglogos.com/uploads/walmart-logo-24.jpg",
            link: "https://www.walmart.com",
            tags: ["retail, ", "grocery"]
        },
        {
            business: "Whole Foods Market",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Whole_Foods_Market_201x_logo.svg",
            link: "https://www.wholefoodsmarket.com",
            tags: ["grocery"]
        },
        {
            business: "Dick's Sporting Goods",
            logo: "https://yt3.ggpht.com/ytc/AKedOLSMFUMsYz8z7K0SYbMY81kaGPse01Z-MMjWnz3FpQ=s900-c-k-c0x00ffffff-no-rj",
            link: "https://www.dickssportinggoods.com",
            tags: ["sports, ", "outdoor"]
        },
        {
            business: "The Home Depot",
            logo: "data:image/png;base64,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",
            link: "https://www.homedepot.com",
            tags: ["tools, ", "supplies"]
        },
        {
            business: "Simon and Sons",
            logo: "https://cdn.shopify.com/s/files/1/0469/1951/6326/files/sas_logo.png?height=628&pad_color=636363&v=1600793931&width=1200",
            link: "https://simonandsons.com",
            tags: ["clothing, ", "formal"]
        },
        {
            business: "Centre Pieces Design",
            logo: "https://asset.bloomnation.com/c_fit,f_auto,h_131,q_auto,w_500/v1/vendor/3034/profile/n/e/new2.png",
            link: "https://centrepiecesdesign.com",
            tags: ["floral"]
        }
    ]
    // Business name, description, cetegory, link to website, location
    return (
        <div className={styles.list}>
            {products && products.map((vendor, index) => {
                return (
                    <a href={vendor.link} className={styles.vendorCard} key={index} style={{textDecoration: "none"}}>
                        <img src={vendor.logo} width="80%" height="auto" />
                        <div style={{ display: "flex", flexDirection: "row"}}>
                        {vendor.tags.map((tag, index) => {
                            return <p key={index} className="bodySm dark" style={{paddingRight: "2px"}}>{tag}</p>
                        })}
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default List
