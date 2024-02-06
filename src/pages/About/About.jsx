import React from "react";
import Section from "../../components/section/Section";
import { Stack, Typography } from "@mui/material";
import theme from '../../theme/theme';


const AboutPage= () => {


    return(
        
            <Stack>
                <Section header="من نحن" >
                    <Typography fontSize='24px' textAlign={'right'} lineHeight='45px' p={{xs:'0 30px',md:"0 100px"}} fontWeight={500} color={theme.palette.text.primary}>
                    مرحبًا بكم في مسار السياحية في موسكو، بوابتكم لاستكشاف مدينة موسكو التاريخية النابضة بالحياة! تقع شركتنا السياحية في قلب روسيا، وتكرس جهودها لتقديم تجارب لا تُنسى وغمر المسافرين بالثقافة والتراث والمعالم الغنية التي تحدد هذه المدينة الديناميكية. مع فريق من السكان المحليين المتحمسين والمرشدين المتمرسين، نقدم جولات ورحلات استكشافية تكشف النقاب عن الجواهر المخفية والمعالم السياحية الشهيرة في موسكو، بدءًا من الساحة الحمراء المهيبة والكرملين المذهل وحتى جمال كاتدرائية سانت بطرسبرغ الأخاذ. كاتدرائية باسيل. سواء كنت من عشاق التاريخ، أو من عشاق الفن، أو تبحث ببساطة عن المغامرة، فإن برامج الرحلات المخصصة لدينا تلبي اهتمامات وتفضيلات كل مسافر.
                     انضم إلينا في رحلة لا تُنسى عبر شوارع موسكو العريقة، حيث تمتلئ كل لحظة بالاكتشاف والإثارة وسحر هذه المدينة الساحرة.
                    </Typography>
                </Section>
            </Stack>
        
    )
}

export default AboutPage