//리엑트문법 쌩 h1여러개는 불가능 하지만 div나 ul로 감싸면 2개이상이 가능하다.
/*ReactDOM.render( 
<div>
    <h1>레전드</h1>
    <h1>이게 되네</h1>
</div>
,document.getElementById('root'))*/

//컴포넌트 형태로 하기
import React from "react"
import Footer from "./footer" //footer.js 불러오기 근데 패키징해야되는데 굳이 요즘은 할필요가 없다

function Header()
{
return(
    <header>
        <nav><img src="dog.jpg"></img></nav>
    </header>
)
}
function MainComponent(){
return(
<div>
        <h1>이게 강아지다</h1>
    <ol>
         <li>하하</li>
         <li>하하하ㅏ하하핳</li>
    </ol>
</div>
)
}


function Page(){
    return(
        <div>
            <Header />
            <MainComponent />
            <Footer />
        </div>

    )
}

ReactDOM.render(<Page />, document.getElementById("root"))