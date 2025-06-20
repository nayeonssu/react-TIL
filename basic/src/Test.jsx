import Header from "./Header.jsx";
import './Test.css';
//컴포넌트 생성 Test(부모컴포넌트)
function Test(){
    return (
        <>
            <Header />
            <h1>Test 컴포넌트</h1>
            <Aside />
        </>
    )
}
//자식컴포넌트
function Aside(){
    return(
        <aside>
            <h1 style={{borderBottom:'2px solid #000',paddingBottom:'12px'}}>오늘 저녁</h1>
            <a href="#">용용선생</a>
            <hr />
            <a href="#">등갈비구이</a>
            <hr />
            <a href="#">솥밥</a>
        </aside>
    )
    
}
//다른 컴포넌트에서 해당 Test컴포넌트 사용가능하도록 내보내기 설정
export default Test;
