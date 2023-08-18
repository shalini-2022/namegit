const service=require('./service')
const excel=require('xlsx')

/*const csv = require('csvtojson')
const importuser=async(req,res)=>{
   try{
        if((req.file==undefined)||(req.file==null)){
           res.send({code:404,message:"please upload csv file...!"})
            return console.log('kindly select and upload csv file');
        }
        let path="./files/"+req.file.filename
        const details=await csv().fromFile(path)
    
        
        for (const item of details){
            const servicesave =await service.savedetails(item);
            
        
        }res.send({status:200,success:true ,message:"uploaded succesfully"})
    }catch(error){
        res.send({message:error,status:"not uploaded"})
    
   }    
  }*/
  const exceluser=async(req,res)=>{
    try{
     /*   if((req.file==undefined)||(req.file==null)){
            res.json({code:404,message:"please upload xlsx file...!"})
            return console.log('kindly select and upload xlsx file');
        }*/

        let path="./files/"+req.file.filename
        const workbook= excel.readFile(path)
        const sheetname=workbook.SheetNames[0];
        const sheet=workbook.Sheets[sheetname];
        const jsonData=excel.utils.sheet_to_json(sheet);
    
        
        for (const item of jsonData){
            const servicesave =await service.savedetails(item);
            
        
        }res.json({status:200,success:true ,message:"uploaded succesfully"})
    }catch(error){
        res.json({message:error,status:"not uploaded"})        
    }    
    }
    module.exports = 
    {
        exceluser   
    }

       

    