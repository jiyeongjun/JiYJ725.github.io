import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import {ThemeProvider} from "styled-components";
import BackGround from "./style/background";
import {useDarkMode} from "./hooks/useDarkMode";
import {dark, light, fontSizes, fontWeights} from "./style/theme";
import Header from "./components/Header";
import {Text} from "./style/Text";
import {useSelector} from "react-redux";
import {ReducerType} from "./store";
import Nope from "./Nope";

const TodoPage = React.lazy(() => import("./views/TodoPage"));
const CounterPage = React.lazy(() => import("./views/CounterPage"));


function App() {
  const [themeMode, toggleTheme] = useDarkMode();
  const isAuth = useSelector((state: ReducerType) => state.auth.isAuthenticated);

  const theme =
    themeMode === "light"
      ? {mode: light, fontSizes, fontWeights}
      : {mode: dark, fontSizes, fontWeights};


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <BackGround>
          <Header themeMode={themeMode} toggleTheme={toggleTheme}></Header>
          {!isAuth && <div style={{textAlign: "center", margin: "2rem"}}>
            <Text>DEMO Version <br></br><br></br>
              - 바로 로그인 버튼을 누르거나 <br></br>
              - 아무 email이나 Password를 입력 후 로그인 버튼을 눌러주세요 :) <br></br>
              - 로그인 해야 컨텐츠가 보입니다!!

              <br></br><br></br><br></br>
              구현한 것<br></br>
              - 반응형 : 데스크톱버전, 모바일 버전에 따른 상단 메뉴 변경<br></br>
              - 로그아웃버튼 (데스크톱, 모바일)<br></br>
              - 다크모드 <br></br>
              <br></br><br></br>
              구현예정<br></br>
              - 모바일 모드에서 햄버거 메뉴<br></br>
              - 검색 기능
              <br></br><br></br>
              *** http://localhost:3001로 jsonServer를 돌려야 정상 동작합니다!
            </Text>
          </div>}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/todo" element={<TodoPage/>}/>
              <Route path="/counter" element={<CounterPage/>}/>
              <Route path="/" element={<Nope/>}/>
            </Routes>
          </Suspense>
        </BackGround>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
