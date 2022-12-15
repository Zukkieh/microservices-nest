import { InMemoryNotificationsRepository } from '../../../test/repositories/in-menory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Test notification',
      category: 'Test category',
      recipientId: 'Test recipientId',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
