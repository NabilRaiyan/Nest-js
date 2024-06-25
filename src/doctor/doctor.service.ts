/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { DoctorDto } from "./doctor.dto";

// doctor service class
@Injectable()
export class DoctorService{
    // get all doctor
    getDoctor(): object {
        return {
            Doctors: {
                doc1:"Raiyan",
                doc2:"Sultan",
                doc3:"Jhon",
                doc4:"Abraham",
                doc5:"Yousuf"
            }
        };
    }

    // get doctor by name
    getDocByName(docName: string): object{
        return {
            id: 1,
            name: docName,
            gender: "Male"
            
        }
    }
    // add new doctor
    addDoctor(myObj: DoctorDto): object{
        console.log(myObj);
        return myObj;
    }

    // update doctor information method
    updateDocInfo(myObj: object):object{
        console.log(myObj);
        return myObj;
    }

    // update password method
    updatePassword(Userpassword: object, id:number): object{
        return {message: "Password is Updated ", id,   body:Userpassword};
    }

    // delete cotor by id method
    deleteDocById(id: number): object{
        return {
            message: "Successfully deleted the doctor",
            id: id,
        }
    }

}