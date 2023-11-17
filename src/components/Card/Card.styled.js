import styled from 'styled-components';

export const CardWrapper = styled.div`
margin: 50px;

.card{
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 22rem;
    width: 22rem;
    background-color: white;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1),10px 10px 15px -3px rgba(0,0,0,0.1);

}

.header{
    display: flex;
    width: 100%;
    justify-content: center;
    height: 15%;
}

.textarea{
    display: flex;
    width: 100%;
    justify-content: left;
    margin-left: 20px;
    height: 75%;
}

.footer{
    display: flex;
    width: 100%;
    justify-content: center;
    height: 10%;
}
`;

