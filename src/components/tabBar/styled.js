import styled from "styled-components";


export const TabBarWrapper = styled.div`
    width:100%;
    height:0.44rem;
    position:fixed;
    left:0;
    bottom:0;
    border-top:1px solid #ccc;
    background:#fff;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-between;
        li{
            width:100%;
            height:100%;
        }
        a{
            width:100%;
            height:100%;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            color:#8d8a8a
        }
        i{
            font-size:18px;
            font-weight: 2000;
            
        }
        span{
            font-size:12px;
            
        }
        .active{
            color:#008842;
        }
    }
`