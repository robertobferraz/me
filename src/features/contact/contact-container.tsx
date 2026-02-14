import type { ContactLink } from '@/domain/entities/portfolio';
import { ContactPresenter } from '@/features/contact/contact-presenter';

export function ContactContainer({ contacts }: { contacts: ContactLink[] }) {
  return <ContactPresenter contacts={contacts} />;
}
