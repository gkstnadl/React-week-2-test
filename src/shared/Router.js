import React from "react";
// react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Main from '../pages/Main';
import Detail from "../pages/Detail";
import FanLetterList from "../components/FanLetterList";

//BrowserRouter를 Router로 감싸는 이유는, 
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/:memberName" element={<FanLetterList />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;