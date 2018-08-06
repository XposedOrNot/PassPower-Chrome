# XoN-PassPower-chrome

** Captcha for passwords **

![XoN-PassPower demo](https://github.com/DevaOnBreaches/PassPower-Chrome/blob/master/pics/demo.gif)


## What is XoN-PassPower?

XoN-PassPower is a Chrome extension created and maintained by me [Devanand Premkumar ](https://twitter.com/devaonbreaches). 
This extension detects and notifies you of exposed and breached passwords. An event listener 
will be added to all input fields of type "password" and continuously monitor for exposed passwords.

Lets say, you enter a password in one of the web sites.Immediately this password is securely
hashed and anonymously checked against our public XoN-PassPower API (https://xposedornot.com/api_doc),
whether this password has been breached and exposed in previous security breaches. 

Based on API feedback, you will be informed of the breach status and recommendations
will be given for changing them to minimize risk.

Feel free to read  password creation tips at  :
https://www.devaonbreaches.com/2018/05/basic-hygiene-precautions-for-better.html

## How to Use XoN-PassPower

There is no configuration needed other than the basic installation . Please install XoN-PassPower from Chrome Webstore 
https://chrome.google.com/webstore/detail/XoN-PassPower/


## Why use XoN-PassPower ?

XoN-PassPower has one of the largest collection of real time passwords exposed in previous 
security breaches. The collection currently contains approximately 850 million passwords and 
is providing this as a service to all those who want to check the security posture of their 
passwords. 

Public searchable website is available at :
https://XposedOrNot.com for folks who want to check the passwords directly instead of extensions.

## How secure is my password ?

XoN-PassPower makes use of Keccak-512 (SHA3) hashing algorithm for securely transmitting anonymized 
and partial hashes for validation. Since we make use of Keccak-512, the first 10 characters of the 
hash is checked and results returned by API over through secure communication channel for high 
reliability.
 
The complete source code of this application is hosted in Github for easy reference and review.
Feel free to review and provide your suggestions/inputs. 

In case if you identify an issue or have an recommendation feel free to raise a 
[GitHub issue](https://github.com/DevaOnBreaches/PassPower-Chrome/issues) .

## Changelog


**0.1.0**: *05-Aug-2018*

- First release! 
