import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Test notification'),
      category: 'Test category',
      recipientId: 'Test recipientId',
    });
    expect(notification).toBeTruthy();
  });
});
