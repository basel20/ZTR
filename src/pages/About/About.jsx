import React from "react";
import Section from "../../components/section/Section";
import { Stack, Typography } from "@mui/material";
import theme from '../../theme/theme';


const AboutPage= () => {


    return(
        
            <Stack>
                <Section header="من نحن" >
                    <Typography fontSize='24px' textAlign={'right'} lineHeight='45px' p={{xs:'0 30px',md:"0 100px"}} fontWeight={500} color={theme.palette.text.primary}>
                    مرحبًا بكم في مسار، بوابتكم الشخصية لاكتشاف مدينة موسكو التاريخية المليئة بالحيوية! نحن شركة سياحية موجودة في قلب روسيا، ونسعى جاهدين لتقديم تجارب لا تُنسى ونغمر المسافرين بالثقافة والتراث والمعالم الغنية التي تميز هذه المدينة الديناميكية.
<br></br>
<br></br>
سواء كنت من محبي التاريخ، أو من محبي الفن، أو تبحث ببساطة عن المغامرة، فإننا مستعدون لتلبية اهتماماتكم وتفضيلاتكم. انضموا إلينا في رحلة لا تُنسى عبر شوارع موسكو العريقة، حيث تتمتع كل لحظة بالاكتشاف والإثارة وسحر هذه المدينة الساحرة.
<br></br>
<br></br>
يفخر فريقنا بخدمة أكثر من ألف عميل خلال عام 2023، ونحرص دائمًا على تقديم أفضل العروض والخصومات لحجوزات الفنادق. نضمن لكم حجوزات موثوقة وخدمات ممتازة طوال فترة إقامتكم. ولدينا فريق من المرشدين السياحيين المتحدثين بالعربية الذين سيقدمون لكم الدعم والمساعدة خلال رحلتكم.
<br></br>
<br></br>
مهمتنا هي تقديم تجربة سياحية فريدة ولا تُنسى، ولذلك نوفر حجوزات لجميع الفعاليات السياحية الممتعة والمثيرة. انضموا إلينا اليوم واستمتعوا برحلة استكشافية ممتعة في مدينة موسكو المدهشة.
                    </Typography>
                </Section>
            </Stack>
        
    )
}

export default AboutPage