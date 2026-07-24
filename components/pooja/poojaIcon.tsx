import {
  BabyIcon,
  FlameIcon,
  FlowerIcon,
  IconProps,
  KalashIcon,
  LotusIcon,
  MoonIcon,
  OrbitIcon,
  ScissorsIcon,
  TempleIcon,
} from '@/components/ui/Icon';

type IconComponent = (props: IconProps) => JSX.Element;

const iconMap: Record<string, IconComponent> = {
  'griha-pravesh-puja': TempleIcon,
  'vastu-shanti-puja': TempleIcon,
  'naamkaran-sanskar': BabyIcon,
  'mundan-sanskar': ScissorsIcon,
  'annaprashan-sanskar': BabyIcon,
  rudrabhishek: FlameIcon,
  'maha-mrityunjaya-havan': FlameIcon,
  'durga-saptashati-havan': FlameIcon,
  'hanuman-havan-sundarkand': FlameIcon,
  'navagraha-puja': OrbitIcon,
  'kaal-sarp-dosh-puja': OrbitIcon,
  'mangal-dosh-puja': OrbitIcon,
  'shani-shanti-puja': OrbitIcon,
  'lakshmi-ganesh-puja': FlowerIcon,
  'navratri-kalash-sthapana': KalashIcon,
  'ganesh-chaturthi-sthapana': FlowerIcon,
  'karwa-chauth-puja': MoonIcon,
  'satyanarayan-puja': LotusIcon,
  'ganesh-havan': FlameIcon,
  'gayatri-havan': FlameIcon,
  'laghu-maha-rudra-havan': FlameIcon,
  'purna-ahuti-havan': FlameIcon,
};

export function getPoojaIcon(id: string): IconComponent {
  return iconMap[id] ?? LotusIcon;
}
