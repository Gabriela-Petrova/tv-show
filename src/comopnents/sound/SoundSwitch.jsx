import { useEffect, useState } from "react";
import "./SoundSwitch.css";
import useSound from "use-sound";
import play from "../../assets/sound.wav";

const SoundSwitch = () => {
  const [soundOff, setSoundOff] = useState(false);
  const [sound, { stop }] = useSound(play);

  useEffect(() => {
    if (soundOff) {
      stop();
    } else {
      sound();
    }
  }, [soundOff, sound, stop]);

  const handleSoundToggle = () => {
    setSoundOff((prevSoundOff) => !prevSoundOff);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={soundOff} onChange={handleSoundToggle} />
      <span className="slider" />
    </label>
  );
};

export default SoundSwitch;
