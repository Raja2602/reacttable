import React,{ createContext} from "react";
export let StoreContext=createContext([]);
let StoreProvider=({children})=>{

    let value=[{name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"},
    {name:"jan 2023 month internet bill.pdf", description:"jan 2023 month internet bill.pdf",createdOn:"7-march-2023",lastUpdated:"Exathought",status:"processed"}
];

    return(
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    )
}
export default StoreProvider;