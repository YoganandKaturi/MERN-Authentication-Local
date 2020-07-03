*** Settings ***
Documentation  Register TestCases
Library  SeleniumLibrary

*** Variables ***
${URL}  http://localhost:3000
${BROWSER}  Chrome

*** Test Cases ***
Login TestCases
    Open Link
    Register with new credentials
    Register with existing credentials
    Close Website

*** Keywords ***
Open Link
    Open Browser  ${URL}  ${BROWSER}
    Maximize Browser Window
    Click Link  xpath://*[@id="root"]/div/div[1]/ul/li[2]/a
    Click Link  xpath://*[@id="root"]/div/div[2]/p[2]/a

Register with new credentials
    Input Text  xpath://*[@id="root"]/div/div[2]/form/input[1]  ShivaRam Satish
    Input Text  xpath://*[@id="root"]/div/div[2]/form/input[2]  satish540@sasi.ac.in
    Input Password  xpath://*[@id="root"]/div/div[2]/form/input[3]  957374
    Input Password  xpath://*[@id="root"]/div/div[2]/form/input[4]  957374
    Click Button  xpath://*[@id="root"]/div/div[2]/form/button
    Sleep  2s

Register with existing credentials
    Input Text  xpath://*[@id="root"]/div/div[2]/form/input[1]  ShivaRam Satish
    Input Text  xpath://*[@id="root"]/div/div[2]/form/input[2]  satish540@sasi.ac.in
    Input Password  xpath://*[@id="root"]/div/div[2]/form/input[3]  957374
    Input Password  xpath://*[@id="root"]/div/div[2]/form/input[4]  957374
    Click Button  xpath://*[@id="root"]/div/div[2]/form/button
    page should contain element  xpath://*[@id="root"]/div/div[2]/form/p
    Sleep  2s

Close Website
    Close Window
