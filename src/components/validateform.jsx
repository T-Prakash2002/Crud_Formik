import * as Yup from 'yup'


export const validateform=Yup.object({
    book_title: Yup.string().min(2).required("Please Enter name"),
    book_ISBN: Yup.string().min(2).required("Please Enter ISBN"),
    book_Pub_Date: Yup.string().min(2).required("Please Select DoB"),
    book_imgURL: Yup.string().min(2).required("Please Enter Url"),
    author_name: Yup.string().min(2).required("Please Enter Author name"),
    author_dob: Yup.string().min(2).required("Please Enter Author DoB"),
    author_bio: Yup.string().min(2).required("Please Enter Author Bio"),

})