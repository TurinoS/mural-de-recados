import styled from "styled-components"

export const StyledWrapperLight = styled.div`
    --primary: #198492;
    --secondary: #349081;
    --font-white: #f9f6eb;
    --font-black: #022f1c;
    --green: #309C4D;

    & main {
        padding: 5vh 7vw;
        min-height: calc(100vh - 119.28px);
        background-color: var(--secondary);
    }
`

export const StyledWrapperDark = styled.div`
    --primary: #012114;
    --secondary: #023229;
    --font-white: #d2ea9f;
    --font-black: #84c514;
    --green: #005116;

    & main {
        padding: 5vh 7vw;
        min-height: calc(100vh - 119.28px);
        background-color: var(--secondary);
    }
`