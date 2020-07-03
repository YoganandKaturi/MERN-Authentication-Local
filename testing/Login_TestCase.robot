*** Settings ***
Documentation  Login TestCase
Library  SeleniumLibrary

*** Variables ***
${URL}  http://localhost:3000
${BROWSER}  Chrome

*** Test Cases ***
Login TestCases
    Open Link
    Login with correct credentials
    Login with wrong credentials
    Close Website

*** Keywords ***
Open Link
    Open Browser  ${URL}  ${BROWSER}
    Maximize Browser Window

Login with correct credentials
    Input Text  xpath://*[@id="root"]/div/div/form/input[1]  yogananda560@sasi.ac.in
    Input Password  xpath://*[@id="root"]/div/div/form/input[2]  957374
    Click Button  xpath://*[@id="root"]/div/div/form/button
    sleep  1s
    page should contain Button  xpath://*[@id="root"]/div/div/div/div[1]/h3/button
    sleep  1s
    Click Button  xpath://*[@id="root"]/div/div/div/div[1]/h3/button
    sleep  1s

Login with wrong credentials
    Input Text   xpath://*[@id="root"]/div/div/form/input[1]  yogananda560@sasi.ac.in
    Input Password  xpath://*[@id="root"]/div/div/form/input[2]  957375
    Click Button  xpath://*[@id="root"]/div/div/form/button
    sleep  2s
    Page should contain element  xpath://*[@id="root"]/div/div/form/div




Close Website
    Close Window
