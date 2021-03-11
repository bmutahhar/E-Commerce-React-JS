import {makeStyles} from "@material-ui/core/styles"

export default makeStyles(()=>({
    root:{
        // maxWidth: '100%',
        // maxHeight: '80%',
    },
    media: {
        // height:0,
        // paddingTop: '56.25%',
        objectFit:"contain",
        height:250,
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft:20,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}))