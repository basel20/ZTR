import React from "react";
import i18n from "../../components/Trans/i18";
import Section from "../../components/section/Section";
import { Stack, Typography } from "@mui/material";
import theme from '../../theme/theme';
import { useTranslation} from 'react-i18next';


const AboutPage= () => {

    const { t } = useTranslation();

    return(
        
            <Stack>
                <Section header={t("About us" )}>
                    <Typography fontSize='24px' textAlign={i18n.language === 'en'? 'left':'right'} lineHeight='45px' p={{xs:'0 30px',md:"0 100px"}} fontWeight={500} color={theme.palette.text.primary}>
                    {t("The aim of the work is Creation of a tourism web application to promote the tourism potential of Yemen. The application will help attract tourists to Yemen by providing information about cultural attractions tourist routes natural beauties And other attractions worth visiting.")}
<br/>


{t("The main idea of the application is to focus on tourism in one country (Yemn)")}
<br/>
 {t("Orientation to places popular with the local population, because site creators were born and live in Yemen and know this country well")}<br/>
 {t("Target audience - youth (students), so the focus is on a reasonable price and places popular with young people")}
<br/>

{t("bezns- the idea is Development of tourism in Yemen Profits in industries related to the provision of tourism business. Partner with local companies for one-stop service And Create and sell Yemen branded souvenirs online")}
                    </Typography>
                </Section>
            </Stack>
        
    )
}

export default AboutPage