import { Kafka, Producer } from "kafkajs";
import { EventEmitter } from "events";

type Subscription = { topic: string; fromBeginning?: boolean };

export default class Rapid extends EventEmitter {
  private readonly producer: Producer;
  private readonly topic: string;
  private connected: boolean;
  private started: boolean;

  constructor(kafka: Kafka, topic: string) {
    super();

    this.producer = kafka.producer();
    this.topic = topic;
    this.connected = false;
    this.started = false;
  }

  async publish(value: any) {
    try {
      await this.connect();
      await this.producer.send({
        topic: this.topic,
        messages: [{ value }],
      });
    } catch (e: any) {
      await this._destroy(e);
    }
  }

  private async connect() {
    if (!this.connected) {
      this.connected = true;
      this.emit("connecting");
      await this.producer.connect();
      this.emit("connected");
    }
    if (!this.started) {
      this.started = true;
    }
  }

  private async _destroy(error: Error | null) {
    this.emit("disconnect");
    await this.producer.disconnect();
  }

  private reset() {
    this.connected = false;
    this.started = false;
  }
}
