
function Products_data(dataName){
    switch (dataName) {
        case "categories":
            const categories = [
                {
                    categories :1,
                    name :"phone"
                },
                {
                    categories :2,
                    name :"computer"
                }
            ]
            return categories;
    
        case "products":
            const products=[
                {
                    categories:1,
                    name:"LUMIA 1",
                    img: "https://vn.canon/media/image/2019/07/08/8d0db401031e4decbdf0d82dce54c796_G7+X+mkIII+BK+Front.png",
                    detail:"DIGITAL CAMERA NEW",
                },
                {
                    categories:1,

                    name:"LUMIA 2",
                    img: "https://bizweb.dktcdn.net/100/369/815/products/ixus-190-b2.png?v=1641540261410",
                    detail:"DIGITAL CAMERA NEW",
                },
                {
                    categories:2,

                    name:"LUMIA 3",
                    img: "https://vn.canon/media/image/2019/07/08/02ad3d440d6c4c249650ccfe66ccdcbe_PowerShot+G5+X+mkII+Front.png",
                    detail:"DIGITAL CAMERA NEW",
                },
                {
                    categories:2,

                    name:"LUMIA 4",
                    img: "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9aeqFMY3fvEkMLBHAiSy_A1n8qrxtANjsQSvC4SF43-4eFObFO-mA5nXJrGGVsh40QntarSPDkq1bv-bQcq4wJI=/Views/26288_front.png",
                    detail:"DIGITAL CAMERA NEW",
                },{
                    categories:1,

                    name:"LUMIA 5",
                    img: "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9aeqFMY3fvEkMLBHAiSy_A1n8qrxtANjsQSvC4SF43-4eFObFO-mA5nXJrGGVsh40QntarSPDkq1bv-bQcq4wJI=/Views/26288_front.png",
                    detail:"DIGITAL CAMERA NEW",
                }
        
            ]
            return products;
            
    } 
}
export default Products_data;