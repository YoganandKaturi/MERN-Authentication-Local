*** Settings ***
Documentation  Register TestCases
Library  SeleniumLibrary

*** Variables ***
${URL}  http://localhost:3000
${BROWSER}  Chrome

*** Test Cases ***
Login TestCases
    Open Link
    Send email to reset Password
    Close Website

*** Keywords ***
Open Link
    Open Browser  ${URL}  ${BROWSER}
    Maximize Browser Window
    Click Link  xpath://*[@id="root"]/div/div[1]/ul/li[2]/a
    Click Link  xpath://*[@id="root"]/div/div[2]/p[1]/a

Send email to reset Password
    Input Text  xpath://*[@id="root"]/div/div[2]/form/input  yogananda560@sasi.ac.in
    Click Button  xpath://*[@id="root"]/div/div[2]/form/button
    sleep  3s

Close Website
    Close Window