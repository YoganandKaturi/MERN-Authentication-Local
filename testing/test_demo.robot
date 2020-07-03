*** Settings ***
Documentation  Test Local Authentication Website
Library  SeleniumLibrary

*** Variables ***
${URL}  http://localhost:3000
${BROWSER}  Chrome

*** Test Cases ***
Login TestCases
    Open Link
    Login with credentials
    Close Website

*** Keywords ***
Open Link
    Open Browser  ${URL}  ${BROWSER}
    Maximize Browser Window

Login with credentials
    Input Text  xpath://*[@id="root"]/div/div/form/input[1]  yogananda560@sasi.ac.in
    Input Text  xpath://*[@id="root"]/div/div/form/input[2]  957374
    Click Button  xpath://*[@id="root"]/div/div/form/button
    sleep  5s
    Click Link  xpath://*[@id="root"]/div/div/div/div[2]/h4/a
    sleep  3s
    Click Link  xpath://*[@id="root"]/div/div/div/div[2]/h4/a
    sleep  3s
    Click Button  xpath://*[@id="root"]/div/div/div/div[1]/h3/button
    sleep  5s

Close Website
    Close Window
