import React from "react";
import { v4 as uuidv4 } from "uuid";

const defaultState = [
  {
    id: uuidv4(),
    title: "Guided Access",
    os: "iphone",
    description: (
      <React.Fragment>
        <li>1. Open the Settings app on your iPhone.</li>
        <li>2. Tap &quot;General&quot; and then&quot;Accessibility.&quot;</li>
        <li>3. Scroll down to &quot;Guided Access&quot; and toggle it on.</li>
        <li>
          4. Tap &quot;Passcode Settings&quot; to set a passcode for Guided
          Access. You also use Face ID or Touch ID if your device supports it.
        </li>
        <li>5. Open the app that you want to use with Guided Access.</li>
        <li>
          6. Triple-click the Home button (or the side button on newer iPhones)
          to activate Guided Access.
        </li>
        <li>
          7. Use your finger to circle any areas of the screen that you want to
          disable. You can also turn off touch and motion controls.
        </li>
        <li> 8. Tap &quot;Start&quot; to begin Guided Access.</li>
        <li>
          9. To end Guided Access, triple-click the Home button(or side button)
          again and enter your passcode. That&apos;s it! You can now use Guided
          Access to lock your iPhone to a single app and limit access to certain
          parts of the screen.
        </li>
      </React.Fragment>
    ),
    video_url: "https://www.youtube.com/embed/OEaOLPhaW5E",
    advantages: (
      <React.Fragment>
        Guided Access is a useful feature on iPhones that allows you to lock
        your device to a single app and restrict access to certain parts of the
        screen.
        <br />
        It&apos;s especially helpful for parents who want to limit their
        children&apos;s access to certain apps or for people who need to focus
        on a specific task. Here are the steps to perform Guided Access on
        iPhones.
      </React.Fragment>
    ),
  },
  {
    id: uuidv4(),
    title: "Encrypt Your Device",
    os: "android",
    description: (
      <React.Fragment>
        <li>1. Open the Settings app on your phone.</li>
        <li>2. Tap &quot;Security & Location&quot; or &quot;Security.&quot;</li>
        <li>
          3. Tap &quot;Encryption & credentials&quot; or &quot;Encrypt
          phone.&quot;
        </li>
        <li>
          4. Follow the on-screen instructions to encrypt your device. This
          process may take some time, and your phone may restart several times
          during the encryption process.
        </li>
      </React.Fragment>
    ),
    video_url: "https://www.youtube.com/embed/AYcqo5CEKgI",
    advantages: (
      <React.Fragment>
        Encrypting your Android phone ensures that your personal data remains
        safe even if your phone falls into the wrong hands. Encryption scrambles
        your data so that it&apos;s unreadable without the correct decryption
        key, which is tied to your lock screen password or PIN. Here&apos;s how
        to encrypt your Android phone:
      </React.Fragment>
    ),
  },
  {
    id: uuidv4(),
    title: "Use Shortcuts",
    os: "iphone",
    description: (
      <React.Fragment>
        <li>1. Download the Shortcuts app from the App Store.</li>
        <li>
          2. Open the app and tap the &quot;+&quot; icon to create a new
          shortcut.
        </li>
        <li>
          3. Choose the actions you want the shortcut to perform, such as
          sending a message or playing a song.
        </li>
        <li>4. Give the shortcut a name and tap &quot;Done.&quot;</li>
        <li>
          5. To trigger the shortcut, say &quot;Hey Siri, [shortcut name].&quot;
        </li>
      </React.Fragment>
    ),
    video_url: "https://www.youtube.com/embed/K4gLTEHumHI",
    advantages: (
      <React.Fragment>
        Shortcuts is an app that allows you to create custom automations on your
        iPhone. With Shortcuts, you can create a series of actions that are
        triggered by a single command, such as &quot;Hey Siri.&quot; Here&apos;s
        how touse Shortcuts:
      </React.Fragment>
    ),
  },
  {
    id: uuidv4(),
    title: "Jailbreak Your iPhone",
    os: "iphone",
    description: (
      <React.Fragment>
        <li>
          1. Note: Jailbreaking can potentially void your warranty and may
          expose your device to security risks. Proceed at your own risk.
        </li>
        <li>
          2. Download a jailbreaking tool, such as Cydia Impactor or Checkra1n,
          to your computer.
        </li>
        <li>3. Connect your iPhone to your computer using a USB cable.</li>
        <li>
          4. Follow the instructions provided by the jailbreaking tool to
          jailbreak your iPhone.
        </li>
        <li>
          5. Once your iPhone is jailbroken, you can install third-partyapps and
          tweaks from sources other than the App Store.
        </li>
      </React.Fragment>
    ),
    video_url: "https://www.youtube.com/embed/K4gLTEHumHI",
    advantages: (
      <React.Fragment>
        Jailbreaking is the process of removing the limitations imposed by Apple
        on your iPhone. Jailbreaking allows you to install apps and tweaks that
        are not available on the App Store, customize your iPhone&apos;s
        appearance and functionality, and access system files and settings.
        Here&apos;s how to jailbreak your iPhone:
      </React.Fragment>
    ),
  },
  {
    id: uuidv4(),
    title: "Enable Developer Options",
    os: "android",
    description: (
      <React.Fragment>
        <li>1. Open the Settings app on your phone.</li>
        <li>
          2. Scroll down and tap &quot;About phone&quot; or &quot;About
          device.&quot;
        </li>
        <li>
          3. Scroll down and find the &quot;Build number&quot; or &quot;
          Software version&quot; option.
        </li>
        <li>4. Tap the option seven times in quick succession.</li>
        <li>
          5. You should see a message that says &quot;You are now a
          developer!&quot;.
        </li>
      </React.Fragment>
    ),
    video_url: "https://www.youtube.com/embed/AYcqo5CEKgI",
    advantages: (
      <React.Fragment>
        Developer options are hidden settings that allow you to customize and
        optimize your Android phone. Here&apos;s how to enable Developer Options
        on your Android phone:
      </React.Fragment>
    ),
  },
  {
    id: uuidv4(),
    title: "Use USB Debugging",
    os: "android",
    description: (
      <React.Fragment>
        <li>1. Enable Developer Options (check list for hack).</li>
        <li>2. Open the Settings app on your phone.</li>
        <li>3. Tap &quot;System&quot; or &quot;System & updates.&quot;</li>
        <li>4. Tap &quot;Developer options.&quot;</li>
        <li>5. Scroll down and find the &quot;USB debugging&quot; option.</li>
        <li>Turn on USB debugging.</li>
        <li>Connect your phone to your computer using a USB cable.</li>
        <li>
          Follow the on-screen instructions to allow USB debugging on your
          phone.
        </li>
      </React.Fragment>
    ),
    video_url: "https://www.youtube.com/embed/AYcqo5CEKgI",
    advantages: (
      <React.Fragment>
        USB debugging is a feature that allows you to connect your Android phone
        to a computer and access advanced settings and functions. Here&apos;s
        how to enable USB debugging on your Android phone:
      </React.Fragment>
    ),
  },
];

export default defaultState;
