import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./settingLogo.scss"
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import api from "../../services/api";
import { useFormik } from "formik"
import * as Yup from "yup"


const SettingLogo = () => {
    const [file, setFile] = useState("");
    const [setting, setSetting] = useState({})

    useEffect(() => {
        async function fetch() {
            const respose = await api.get("settings")
            setSetting(respose.data)
        }
        fetch()
    }, [])

    const onSubmit = async (values, actions) => {  
        console.log("submit")
        actions.resetForm()   
        await api.post("settings", values)
        actions.resetForm()
     }

    //  const schema = Yup.object().shape({
    //     name: Yup.string().required('Nome Obrigatorio'),
    //     description: Yup.string().required("Descricao obrigatorio"),

    // })
    const { values, errors, handleChange, touched, isSubmitting, handleBlur, handleSubmit} = useFormik({
        initialValues: {
            company_name: setting.company_name,
        },
        // validationSchema: schema,
        enableReinitialize: true,
        onSubmit 
    })
    return (
        <div className="setting">
            <Sidebar />
            <div className="settingContainer">
                <Navbar />
                <div className="settingDiv">
                    {/* Settings
                    <DatePicker className="datas" selected={startDate} onChange={(date) => setStartDate(date)}/> */}
                    <ul>
                    <li><a href="../settings">Dados da Empresa</a></li>
                        <li><a >Titulo e Logo</a></li>
                        <li><a href="payroll">Folha de Salario</a></li>
                    </ul>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="logoDiv">
                        <div className="company">
                            <label>Titulo/Nome da Empresa</label>
                            <input type="text" id="company_name"
                                defaultValue={setting.company_name} onChange={handleChange} onBlur={handleBlur}/>
                        </div>
                        <div className="upload">
                            <div>
                                <label htmlFor="file">Logo da Empresa: <DriveFolderUploadOutlinedIcon className="icon" /></label>
                                <input   type="file" id="file" style={{ display: 'none' }}/>
                            </div> 
                            <div className="imgDiv">
                            <img 
                                src={
                                file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                } 
                                alt="" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="buttonDiv">
                        <button type="submit">Salvar</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default SettingLogo;