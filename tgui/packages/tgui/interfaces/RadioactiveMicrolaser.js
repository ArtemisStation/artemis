import { Fragment } from 'inferno';
import { useBackend } from '../backend';
import { Button, Box, NumberInput, Section, LabeledList } from '../components';

export const RadioactiveMicrolaser = props => {
  const { act, data } = useBackend(props);
  const {
    irradiate,
    stealth,
    scanmode,
    intensity,
    wavelength,
    on_cooldown,
    cooldown,
  } = data;
  return (
    <Fragment>
      <Section>
        <LabeledList.Item label="Laser Status">
          <Box color={on_cooldown ? "average" : "good"}>
            {on_cooldown ? "Recharging" : "Ready"}
          </Box>
        </LabeledList.Item>
      </Section>
      <Section title="Scanner Controls">
        <LabeledList>
          <LabeledList.Item label="Irradiation">
            <Button
              icon={irradiate ? 'power-off' : 'times'}
              content={irradiate ? 'On' : 'Off'}
              selected={irradiate}
              onClick={() => act('irradiate')} />
          </LabeledList.Item>
          <LabeledList.Item label="Stealth Mode">
            <Button
              icon={stealth ? 'eye-slash' : 'eye'}
              content={stealth ? 'On' : 'Off'}
              disabled={!irradiate}
              selected={stealth}
              onClick={() => act('stealth')} />
          </LabeledList.Item>
          <LabeledList.Item label="Scan Mode">
            <Button
              icon={scanmode ? 'mortar-pestle' : 'heartbeat'}
              content={scanmode ? 'Scan Reagents' : 'Scan Health'}
              disabled={irradiate && stealth}
              onClick={() => act('scanmode')} />
          </LabeledList.Item>
        </LabeledList>
      </Section>
      <Section title="Laser Settings">
        <LabeledList>
          <LabeledList.Item label="Radiation Intensity">
            <Button
              icon="fast-backward"
              onClick={() => act('radintensity', { adjust: -5 })} />
            <Button
              icon="backward"
              onClick={() => act('radintensity', { adjust: -1 })} />
            {' '}
            <NumberInput
              value={Math.round(intensity)}
              width="40px"
              minValue={1}
              maxValue={20}
              onChange={(e, value) => {
                return act('radintensity', {
                  target: value,
                });
              }} />
            {' '}
            <Button
              icon="forward"
              onClick={() => act('radintensity', { adjust: 1 })} />
            <Button
              icon="fast-forward"
              onClick={() => act('radintensity', { adjust: 5 })} />
          </LabeledList.Item>
          <LabeledList.Item label="Radiation Wavelength">
            <Button
              icon="fast-backward"
              onClick={() => act('radwavelength', { adjust: -5 })} />
            <Button
              icon="backward"
              onClick={() => act('radwavelength', { adjust: -1 })} />
            {' '}
            <NumberInput
              value={Math.round(wavelength)}
              width="40px"
              minValue={0}
              maxValue={120}
              onChange={(e, value) => {
                return act('radwavelength', {
                  target: value,
                });
              }} />
            {' '}
            <Button
              icon="forward"
              onClick={() => act('radwavelength', { adjust: 1 })} />
            <Button
              icon="fast-forward"
              onClick={() => act('radwavelength', { adjust: 5 })} />
          </LabeledList.Item>
          <LabeledList.Item label="Laser Cooldown">
            <Box inline bold>
              {cooldown}
            </Box>
          </LabeledList.Item>
        </LabeledList>
      </Section>
    </Fragment>
  );
};
