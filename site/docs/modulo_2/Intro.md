# Otto DIY+

**📄 documentation:✔️100%     level: ⭐️⭐️☆☆☆     ⏱️ 2 hours     ✏️version: 10**     [**💲buy**](https://www.ottodiy.com/store#!/Otto-DIY-builder-kit/p/135022770/category=0)

[**🔧instruction manual** ](https://wikifactory.com/+OttoDIY/otto-diy-plus/files/Instruction%20Manual) [**💻code with blockly**](https://www.ottodiy.com/#blockly)  ♾️[arduino codes](https://wikifactory.com/+OttoDIY/otto-diy-plus/files/Codes)  [📱app](https://www.ottodiy.com/#app)  [**🧊3D files**](https://wikifactory.com/+OttoDIY/otto-diy-plus/files/3Dprint) **🎨**[**papercraft** ](https://wikifactory.com/+OttoDIY/otto-diy/files/Papercraft)  [**📥download**](https://wikifactory.com/+OttoDIY/otto-diy-plus/files)

**Background information:**

Otto is truly Opensource; it means the hardware is easily discerned so that others can make it, Arduino compatible, 3D printable and customizable, the perfect opportunity to build and have your very first robot, learn robotics and have fun, you will learn the logical connection between code and action, and by assembling it, you will understand how its components and electronics work. Visit www.ottodiy.com for more detailed info.

### **Build Your Own Robot**

## How it Works

Otto DIY+ \("PLUS"\) can make everything that basic [Otto DIY](https://wikifactory.com/+OttoDIY/otto-diy) does with stronger motors + Bluetooth + APP + touch and sound sensor. It has broader ways of inteaction and control.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WRwl8_skT1U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Part List

> ### Otto DIY+ can be made with [builder kit+ \(full with 3D printed parts\)](https://www.ottodiy.com/store#!/Otto-DIY-builder-kit/p/135022770/category=0)  and [maker kit+ \(only electronics\) ](https://www.ottodiy.com/store#!/Otto-DIY-maker-kit/p/141124173/category=0)or create your own project with this open source content.

* 1 x Nano ATmega328
* 1 × Nano Shield I/O
* 1 × USB-A to Mini-USB Cable
* 1 × [Bluetooth module BLE](https://www.ottodiy.com/store#!/Bluetooth-module-BLE/p/167767133/category=0)
* 1 × Ultrasound sensor HC-SR04
* 4 x Micro servo MG90
* 1 × Buzzer
* 10 × DuPont Female/Female wires
* 1 × [Sound sensor](https://www.ottodiy.com/store#!/sound-sensor/p/183419097/category=0)
* 1 × [Touch sensor](https://www.ottodiy.com/store#!/touch-sensor/p/183408138/category=0)
* ### M**ake it** [**rechargeable and better performance with this power boost module**](https://www.ottodiy.com/store#!/battery-charger-power-booster-with-switch/p/185515272/category=0)

**3D printed parts:**

Parts to print are available under this project [Files/ 3D Printing](https://wikifactory.com/+OttoDIY/otto-diy-plus/files/3D%20printing)

* 1 x head
* 1 x body
* 2 x leg
* 2 x foot

**Tools:**

* 1 x Generic soldering iron \(not required with our kits\)
* 1 x Phillips screwdriver
* Scissors
* 1 x Hot glue gun \(for DIY\)

## 3D Printing


**If you bought a Builder kit you can skip ahead** but if you have the Maker kit you have to[ 3D print the parts ](https://wikifactory.com/+OttoDIY/otto-diy/files/3Dprint)but Otto is very well designed for 3D printing, so it won't give you trouble if you follow this common parameters:

* Recommended to use a FDM 3D printer with PLA material.
* No need supports or rafts.
* Resolution: 0.20mm
* Fill density 20%

it should take around 8 hours to 3D print a full set of parts for one Otto.

## Software

### For beginners it is recommended to start coding by using our new Blockly a simple visual programming software:

Otto Blockly is completely autonomous \(no need for Arduino IDE, or libraries setup and no Internet access is required\).

![image](https://wikifactory.com/files/RmlsZToyODQ0MzQ=)

​

1. Download ﻿from our website here \(https://www.ottodiy.com/#blockly\)
2. Unzip and install.
3. Open an example.
4. Connect your Otto robot.
5. Select Arduino nano and USB port where Otto is connected.
6. Check the code.
7. Upload and yes is that easy!

<iframe width="560" height="315" src="https://www.youtube.com/embed/chcWxh4Co_c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If your computer did not recognize the USB device you should install the driver CH340 for your Operative System find it here: https://sparks.gogo.co.nz/ch340.html

Play with the examples and start mixing blocks in multiple ways to decide the behaviour of your robot and generate your own codes.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_


### For **more advanced** Arduino programming

### It will allow you to really exploit the potential of your robot, you will be able to try many example codes \(sketchs\) that you can just simply upload and modify them for your own programs.

1. Download [Arduino IDE software for free here](https://www.arduino.cc/en/Main/Software)
2. Install Arduino IDE software in you computer.
3. Download the Otto libraries that are here [https://wikifactory.com/+OttoDIY/otto-diy/file/OttoDIYLibV9.zip](https://wikifactory.com/+OttoDIY/otto-diy/file/OttoDIYLibV9.zip)
4. Open Arduino IDE, navigate to Sketch &gt; Include Library &gt; Add .ZIP Library. At the top of the drop down list, select the option to "Add .ZIP Library''.
5. You will be prompted to select the library. Navigate to the .zip file's location, that you just downloaded and open as it is.
6. Return to the Sketch &gt; Include Library menu. menu. You should now see the library at the bottom of the drop-down menu. That means is ready to use Ottos codes!
7. Connect your Otto through USB.
8. Select in Arduino Tools/
   Board:            “Arduino Nano”
   Processor:     “ATmega328 \(Old bootloader\)"
   Port COM\# \(where your Otto is connected\)\*
9. Open in File/Examples/OttoDIYLib/dance/Otto\_allmoves\_V9.ino
10. Check/Upload the code and your Otto will move!

\* make sure the driver CH340 was installed in your computer by checking is visible in  COM\# **If your computer did not recognize the USB device you should install the driver CH340, depending on your Operative System find it here:** [https://sparks.gogo.co.nz/ch340.html](https://sparks.gogo.co.nz/ch340.html)

## Electronics

### Before inserting the AA batteries you should check your connections and test your robot with the USB cable connected to a computer.

As a good practice you should check your electronics and software in your computer, before assembling all robot to avoid having to disassemble the whole robot to fix something. You can do this by just connecting all the servos, in the place indincated in the wring below and upload any code that makes Otto move with Otto Blockly or Arduino.

![image](https://wikifactory.com/files/RmlsZToyODQ0MzA=)

If you are ready for Batteries you can also check if your power source works, depending of the type of cells you have there can be 2 options:

![image](https://wikifactory.com/files/RmlsZToyODQ0MzE=)

![image](https://wikifactory.com/files/RmlsZToyODQ0MzI=)

There are actually plenty options to power your Otto robot in multiple ways, we explore in more detail in this blog post article: https://www.ottodiy.com/blog/power

## Assembly Instructions

Gather all the off the shelf hardware parts that you'll need for this assembly, or start with our full kits which come with all parts needed. Kits available from www.ottodiy.com

Before getting started with the assembly, download and read carefully the [PDFs from the instruction manuals files tab folder.](https://wikifactory.com/+OttoDIY/otto-diy-plus/files/Instruction%20Manual)

[View OttoDIY+_Manual_V10.pdf @ Wikifactory](https://wikifactory.com/+OttoDIY/otto-diy-plus/file/Instruction%20Manual/OttoDIY+_Manual_V10.pdf)

<iframe width="560" height="315" src="https://www.youtube.com/embed/jZ8xHJLN7Sk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you see some missaligment in the movements, double check that you centered the legs and feet repect to your servos before fixing with the short screw, then it should work ok, but if you want more precise walk and movements, then you can do some electronic calibration as we explain in detail in this blog article:

https://www.ottodiy.com/blog/calibration

## Bluetooth APP

<iframe width="560" height="315" src="https://www.youtube.com/embed/oMY6p6zNqz4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Connect your Bluetooth module like this:

RX pin to 12 on the board

TX pin to 11

Vcc to any 5V

Gnd to any G

You have 2 options, for both you need to download and install the APP to your phone and previously upload the APP code to your robot.

To upload APP code using Otto Blockly, easy open, check, upload, connect, pair and play:

1. In Otto Blockly [Open the Arduino APP .ino sketch from the code folder.](https://wikifactory.com/+OttoDIY/otto-diy-plus/files/Codes)
2. Check and then Upload code via USB to Otto.
3. Download and Install the APP in your smartphone, for FREE here https://www.ottodiy.com/#app
4. In your phone settings Enable Bluetooth, search and pair with the module 1234 as password. \(this is to link to your phone and only needs to be done one time\)
5. Then Open the actual APP and follow the connection process within the APP.
6. Done! your Otto is ready to control and program from your phone.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Or with Arduino IDE is very similar process but you have to make sure libraries are correctly installed:

1. Open Arduino IDE, navigate to Sketch &gt; Include Library &gt; Add .ZIP Library. At the top of the drop down list, select the option to "Add .ZIP Library''. \(you do not need to repeat this stepif you already did it before\)
2. You will be prompted to select the library. Navigate to the .zip file's location, that you just downloaded and open as it is.
3. Back in Arduino IDE navigate to File/Examples/OttoDIYLib/Bluetooth/Otto\_PLUS\_APP\_V9.ino or [Open the Arduino APP .ino sketch from the code folder.](https://wikifactory.com/+OttoDIY/otto-diy-plus/files/Codes)
4. Connect your Otto through USB.
   Select in Arduino Tools/
   Board:            “Arduino Nano”
   Processor:     “ATmega328 \(Old bootloader\)"
   Port COM\# \(where your Otto is connected\)\*
5. Check and then Upload code via USB.
6. Download and Install the APP in your smartphone, for FREE here https://www.ottodiy.com/#app
7. In your phone settings Enable Bluetooth, search and pair with the module 1234 as password. \(this is to link to your phone and only needs to be done one time\)
8. Then Open the actual APP and follow the connection process within the APP.
9. Done! your Otto is ready to control and program from your phone.

## Customize

Here is the 3D CAD source of Otto DIY, feel free to modify to fit your needs or ideas, Then do not forget to submit your robot creation here! https://wikifactory.com/new-project

[View OttoDIY_v09.step @ Wikifactory](https://wikifactory.com/+OttoDIY/otto-diy/file/CAD/OttoDIY_v09.step)

## Join the Otto Builder community!

Follow us, subscribe, give us a like and share your creativity.

1. [Join us here in Wikifactory](https://wikifactory.com/invite/SW52aXRlTGluazo3Ng/ZzHGYHg9oAwik0u-vJrz-x0fsEWrONV54SaYpNx9t1A) [](https://www.youtube.com/c/ottodiy?sub_confirmation=1)& check our [Forum](https://wikifactory.com/+OttoDIY/forum) for questions.
2. [Group in Facebook](https://www.facebook.com/groups/ottodiy/). to share and ask for help in the community and like our [Facebook page](https://www.facebook.com/ottodiy/)
3. [Join the community on Discord chat server! ](https://discord.gg/CZZytnw)
4. [YouTube channel](https://www.youtube.com/c/ottodiy?sub_confirmation=1) for more how to videos and tutorials.
5. [Instagram](https://www.instagram.com/ottodiy/) follow us and share \#ottodiy
6. [Twitter](https://twitter.com/ottodiy) follow us and share \#ottodiy
7. [Give us some feedback please and Fill our new development survey!](https://forms.gle/ZzJUGfxbXbbv2yd5A)

Be a part of this friendly community of robot builders, teachers and makers!

Welcome to our Otto Builder community!

## How to contribute?

1. [Accept the invitation to join this project, click here](https://wikifactory.com/invite/SW52aXRlTGluazoyMTE/a6YdKlRTl4UMClwhc-HSmh2qdjshSJgRUPBLWebxMFE) you will need to sign in/up
2. Now you are able to [upload new files or edit current ones](https://wikifactory.com/+OttoDIY/otto-diy-plus/files)
3. Click on the contribute button and describe your changes.

That simple! happy to have you as a part of the Otto Community :\) and thanks!

## Next Steps
Congratulations you have made a robot with Bluetooth!
Learn more about coding, electronics , design, 3Dprinting  and robotics in general [in our Open EDU \(Open Education\) program here](https://wikifactory.com/+OttoDIY/open-edu)

How about making a more advanced robot like Humanoid?
[Follow the instructions here for Otto DIY Humanoid here](https://wikifactory.com/+OttoDIY/humanoid)

See you there!

## Licenses

Our software and code are licensed with [GNU General Public License v3.0 ](https://www.gnu.org/licenses/gpl-3.0.en.html)
Our hardware and 3D prints are licensed with [CERN OHL V2](https://ohwr.org/cernohl)
Our documenation is licensed with [Creative Commons Attribution-ShareAlike 4.0 International License.](https://creativecommons.org/licenses/by-sa/4.0/)

CC-BY-SA

To make it simple ALWAYS mention www.ottodiy.com in any redistribution and let us know in advance your plans, we will help you. If you receive something for free give it for free too, so you should publish your changes or imporvements as open source as well.
