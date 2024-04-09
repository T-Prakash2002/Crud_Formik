import * as Yup from 'yup'


export const validateform=Yup.object({
    book_title: Yup.string().min(2).required("Please Enter name"),
    book_ISBN: Yup.number().min(5).required("Please Enter ISBN"),
    book_Pub_Date: Yup.date().max(new Date()).required("Please Select DoB"),
    book_imgURL: Yup.string().min(2).required("Please Enter Url"),
    author_name: Yup.string().min(2).required("Please Enter Author name"),
    author_dob: Yup.date().max(new Date()).required("Please Enter Author DoB"),
    author_bio: Yup.string().min(2).required("Please Enter Author Bio"),

})

